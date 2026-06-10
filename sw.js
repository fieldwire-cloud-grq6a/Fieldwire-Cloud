<?xml version="1.0" encoding="utf-8" ?>

<configuration>
   <configSections>
      <section name="microsoft.web.services3" type="Microsoft.Web.Services3.Configuration.WebServicesConfiguration, Microsoft.Web.Services3, Version=3.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35" />
   </configSections>

   <startup useLegacyV2RuntimeActivationPolicy="true">
      <supportedRuntime version="v4.0" sku=".NETFramework,Version=v4.8"/>
   </startup>
   <runtime>
<gcConcurrent enabled="false" />
      <assemblyBinding xmlns="urn:schemas-microsoft-com:asm.v1">
         <probing privatePath="internalplugins;plugins;dependencies;stubplugins"/>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Api"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Controls"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Automation"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.ComApi"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Interop.ComApi"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Clash"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Timeliner"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="Autodesk.Navisworks.Takeoff"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

         <dependentAssembly>
            <assemblyIdentity name="navisworks.factory.clr"
                              publicKeyToken="d85e58fa5af9b484"
                              culture="neutral" />
            <bindingRedirect oldVersion="22.0.0.0 - 22.0.9999.9999"
                             newVersion="22.0.0.00"/>
            <publisherPolicy apply="no" />
         </dependentAssembly>

      </assemblyBinding>
   </runtime>

   <microsoft.web.services3>
      <messaging>
         <maxMessageLength value="51200">
         </maxMessageLength>
         <mtom clientMode="On" />
      </messaging>
      <security>
         <!--Specifies the time buffer used by WSE to determine when a SOAP message is valid.
	         set to the max of 24hr in seconds-->
         <timeToleranceInSeconds value="86400" />
      </security>
   </microsoft.web.services3>
   
   <System.Windows.Forms.ApplicationConfigurationSection>
       <add key="DpiAwareness" value="PerMonitorV2" />
   </System.Windows.Forms.ApplicationConfigurationSection>   
</configuration>
