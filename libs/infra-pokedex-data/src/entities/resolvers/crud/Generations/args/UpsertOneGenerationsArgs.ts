import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsCreateInput } from "../../../inputs/GenerationsCreateInput";
import { GenerationsUpdateInput } from "../../../inputs/GenerationsUpdateInput";
import { GenerationsWhereUniqueInput } from "../../../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateInput, {
    nullable: false
  })
  create!: GenerationsCreateInput;

  @TypeGraphQL.Field(_type => GenerationsUpdateInput, {
    nullable: false
  })
  update!: GenerationsUpdateInput;
}
