import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerriesUpdateInput } from "../../../inputs/BerriesUpdateInput";
import { BerriesWhereUniqueInput } from "../../../inputs/BerriesWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneBerriesArgs {
  @TypeGraphQL.Field(_type => BerriesUpdateInput, {
    nullable: false
  })
  data!: BerriesUpdateInput;

  @TypeGraphQL.Field(_type => BerriesWhereUniqueInput, {
    nullable: false
  })
  where!: BerriesWhereUniqueInput;
}
