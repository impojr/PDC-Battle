function mySettings(props) {
  return (
    <Page>
      <Section
        title={<Text bold align="center">Fitbit Account</Text>}>
        <Oauth
          settingsKey="oauth"
          title="Login"
          label="Fitbit"
          status="Login"
          authorizeUrl="https://www.fitbit.com/oauth2/authorize"
          requestTokenUrl="https://api.fitbit.com/oauth2/token"
          clientId="22CSBX"
          clientSecret="ff0f6b4932ec780a3c69f72fda4092f8"
          scope="activity"
          //scope="sleep"
        />
      </Section>
    </Page>
  );
}

registerSettingsPage(mySettings);