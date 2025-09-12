import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemsOrderByWithRelationInput } from "../../../inputs/ItemsOrderByWithRelationInput";
import { ItemsWhereInput } from "../../../inputs/ItemsWhereInput";
import { ItemsWhereUniqueInput } from "../../../inputs/ItemsWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemsArgs {
  @TypeGraphQL.Field(_type => ItemsWhereInput, {
    nullable: true
  })
  where?: ItemsWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemsOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemsOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemsWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemsWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
