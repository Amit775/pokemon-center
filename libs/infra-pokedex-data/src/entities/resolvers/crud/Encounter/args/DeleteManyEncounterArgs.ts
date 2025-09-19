import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncounterWhereInput } from "../../../inputs/EncounterWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncounterArgs {
  @TypeGraphQL.Field(_type => EncounterWhereInput, {
    nullable: true
  })
  where?: EncounterWhereInput | undefined;
}
