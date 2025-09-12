import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { EncountersUpdateInput } from "../../../inputs/EncountersUpdateInput";
import { EncountersWhereUniqueInput } from "../../../inputs/EncountersWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneEncountersArgs {
  @TypeGraphQL.Field(_type => EncountersUpdateInput, {
    nullable: false
  })
  data!: EncountersUpdateInput;

  @TypeGraphQL.Field(_type => EncountersWhereUniqueInput, {
    nullable: false
  })
  where!: EncountersWhereUniqueInput;
}
