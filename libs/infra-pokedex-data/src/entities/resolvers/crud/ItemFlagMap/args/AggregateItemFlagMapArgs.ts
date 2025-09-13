import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagMapOrderByWithRelationInput } from "../../../inputs/ItemFlagMapOrderByWithRelationInput";
import { ItemFlagMapWhereInput } from "../../../inputs/ItemFlagMapWhereInput";
import { ItemFlagMapWhereUniqueInput } from "../../../inputs/ItemFlagMapWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemFlagMapArgs {
  @TypeGraphQL.Field(_type => ItemFlagMapWhereInput, {
    nullable: true
  })
  where?: ItemFlagMapWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagMapOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemFlagMapOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagMapWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemFlagMapWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
