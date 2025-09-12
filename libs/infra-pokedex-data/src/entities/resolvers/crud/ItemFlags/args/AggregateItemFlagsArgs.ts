import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemFlagsOrderByWithRelationInput } from "../../../inputs/ItemFlagsOrderByWithRelationInput";
import { ItemFlagsWhereInput } from "../../../inputs/ItemFlagsWhereInput";
import { ItemFlagsWhereUniqueInput } from "../../../inputs/ItemFlagsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemFlagsArgs {
  @TypeGraphQL.Field(_type => ItemFlagsWhereInput, {
    nullable: true
  })
  where?: ItemFlagsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemFlagsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemFlagsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemFlagsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemFlagsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
