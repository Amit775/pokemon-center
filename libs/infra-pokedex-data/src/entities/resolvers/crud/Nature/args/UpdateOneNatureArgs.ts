import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureUpdateInput } from "../../../inputs/NatureUpdateInput";
import { NatureWhereUniqueInput } from "../../../inputs/NatureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneNatureArgs {
  @TypeGraphQL.Field(_type => NatureUpdateInput, {
    nullable: false
  })
  data!: NatureUpdateInput;

  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;
}
