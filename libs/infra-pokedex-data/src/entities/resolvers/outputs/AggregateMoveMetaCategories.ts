import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveMetaCategoriesAvgAggregate } from "../outputs/MoveMetaCategoriesAvgAggregate";
import { MoveMetaCategoriesCountAggregate } from "../outputs/MoveMetaCategoriesCountAggregate";
import { MoveMetaCategoriesMaxAggregate } from "../outputs/MoveMetaCategoriesMaxAggregate";
import { MoveMetaCategoriesMinAggregate } from "../outputs/MoveMetaCategoriesMinAggregate";
import { MoveMetaCategoriesSumAggregate } from "../outputs/MoveMetaCategoriesSumAggregate";

@TypeGraphQL.ObjectType("AggregateMoveMetaCategories", {})
export class AggregateMoveMetaCategories {
  @TypeGraphQL.Field(_type => MoveMetaCategoriesCountAggregate, {
    nullable: true
  })
  _count!: MoveMetaCategoriesCountAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesAvgAggregate, {
    nullable: true
  })
  _avg!: MoveMetaCategoriesAvgAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesSumAggregate, {
    nullable: true
  })
  _sum!: MoveMetaCategoriesSumAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesMinAggregate, {
    nullable: true
  })
  _min!: MoveMetaCategoriesMinAggregate | null;

  @TypeGraphQL.Field(_type => MoveMetaCategoriesMaxAggregate, {
    nullable: true
  })
  _max!: MoveMetaCategoriesMaxAggregate | null;
}
