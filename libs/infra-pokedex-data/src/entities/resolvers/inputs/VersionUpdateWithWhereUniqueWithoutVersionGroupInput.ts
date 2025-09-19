import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { VersionUpdateWithoutVersionGroupInput } from "../inputs/VersionUpdateWithoutVersionGroupInput";
import { VersionWhereUniqueInput } from "../inputs/VersionWhereUniqueInput";

@TypeGraphQL.InputType("VersionUpdateWithWhereUniqueWithoutVersionGroupInput", {})
export class VersionUpdateWithWhereUniqueWithoutVersionGroupInput {
  @TypeGraphQL.Field(_type => VersionWhereUniqueInput, {
    nullable: false
  })
  where!: VersionWhereUniqueInput;

  @TypeGraphQL.Field(_type => VersionUpdateWithoutVersionGroupInput, {
    nullable: false
  })
  data!: VersionUpdateWithoutVersionGroupInput;
}
