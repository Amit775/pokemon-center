import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { ItemGameIndexOrderByWithRelationInput } from "../../../inputs/ItemGameIndexOrderByWithRelationInput";
import { ItemGameIndexWhereInput } from "../../../inputs/ItemGameIndexWhereInput";
import { ItemGameIndexWhereUniqueInput } from "../../../inputs/ItemGameIndexWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class AggregateItemGameIndexArgs {
  @TypeGraphQL.Field(_type => ItemGameIndexWhereInput, {
    nullable: true
  })
  where?: ItemGameIndexWhereInput | undefined;

  @TypeGraphQL.Field(_type => [ItemGameIndexOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: ItemGameIndexOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => ItemGameIndexWhereUniqueInput, {
    nullable: true
  })
  cursor?: ItemGameIndexWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
