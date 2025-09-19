import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { StatUpdateInput } from "../../../inputs/StatUpdateInput";
import { StatWhereUniqueInput } from "../../../inputs/StatWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneStatArgs {
  @TypeGraphQL.Field(_type => StatUpdateInput, {
    nullable: false
  })
  data!: StatUpdateInput;

  @TypeGraphQL.Field(_type => StatWhereUniqueInput, {
    nullable: false
  })
  where!: StatWhereUniqueInput;
}
