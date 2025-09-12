import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodsWhereInput } from "../../../inputs/EncounterMethodsWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterMethodsArgs {
  @TypeGraphQL.Field(_type => EncounterMethodsWhereInput, {
    nullable: true
  })
  where?: EncounterMethodsWhereInput | undefined;
}
