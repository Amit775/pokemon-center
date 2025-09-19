import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterMethodWhereInput } from "../../../inputs/EncounterMethodWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterMethodArgs {
  @TypeGraphQL.Field(_type => EncounterMethodWhereInput, {
    nullable: true
  })
  where?: EncounterMethodWhereInput | undefined;
}
