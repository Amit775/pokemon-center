import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemPocketOrderByWithRelationInput } from "../../../inputs/ItemPocketOrderByWithRelationInput";
import { ItemPocketWhereInput } from "../../../inputs/ItemPocketWhereInput";
import { ItemPocketWhereUniqueInput } from "../../../inputs/ItemPocketWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemPocketArgs {
  @TypeGraphQL.Field(_type => ItemPocketWhereInput, {
    nullable: true
  })
  where?: ItemPocketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemPocketOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemPocketOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemPocketWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemPocketWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
