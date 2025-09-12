import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesCreateInput } from "../../../inputs/BerriesCreateInput";
import { BerriesUpdateInput } from "../../../inputs/BerriesUpdateInput";
import { BerriesWhereUniqueInput } from "../../../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;

  @TypeGraphQL.Field(_type => BerriesCreateInput, {
    nullable: false
  })
  create!: BerriesCreateInput;

  @TypeGraphQL.Field(_type => BerriesUpdateInput, {
    nullable: false
  })
  update!: BerriesUpdateInput;
}
