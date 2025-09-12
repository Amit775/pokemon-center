import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { GenerationsUpdateInput } from "../../../inputs/GenerationsUpdateInput";
import { GenerationsWhereUniqueInput } from "../../../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneGenerationsArgs {
  @TypeGraphQL.Field(_type => GenerationsUpdateInput, {
    nullable: false
  })
  data!: GenerationsUpdateInput;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;
}
