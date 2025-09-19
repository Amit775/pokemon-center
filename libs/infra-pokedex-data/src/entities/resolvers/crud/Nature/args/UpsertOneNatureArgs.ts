import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureCreateInput } from "../../../inputs/NatureCreateInput";
import { NatureUpdateInput } from "../../../inputs/NatureUpdateInput";
import { NatureWhereUniqueInput } from "../../../inputs/NatureWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneNatureArgs {
  @TypeGraphQL.Field(_type => NatureWhereUniqueInput, {
    nullable: false
  })
  where!: NatureWhereUniqueInput;

  @TypeGraphQL.Field(_type => NatureCreateInput, {
    nullable: false
  })
  create!: NatureCreateInput;

  @TypeGraphQL.Field(_type => NatureUpdateInput, {
    nullable: false
  })
  update!: NatureUpdateInput;
}
