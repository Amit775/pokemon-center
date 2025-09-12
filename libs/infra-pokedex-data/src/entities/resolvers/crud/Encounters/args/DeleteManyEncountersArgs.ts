import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersWhereInput } from "../../../inputs/EncountersWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersWhereInput, {
    nullable: true
  })
  where?: EncountersWhereInput | undefined;
}
