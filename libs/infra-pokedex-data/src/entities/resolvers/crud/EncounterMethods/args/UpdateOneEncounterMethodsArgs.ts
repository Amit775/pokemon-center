import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsUpdateInput } from "../../../inputs/EncounterMethodsUpdateInput";
import { EncounterMethodsWhereUniqueInput } from "../../../inputs/EncounterMethodsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsUpdateInput, {
    nullable: false
  })
  data!: EncounterMethodsUpdateInput;

  @TypeGraphQL.Field(_type => EncounterMethodsWhereUniqueInput, {
    nullable: false
  })
  where!: EncounterMethodsWhereUniqueInput;
}
