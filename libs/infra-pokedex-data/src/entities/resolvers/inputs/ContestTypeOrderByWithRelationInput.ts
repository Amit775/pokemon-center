import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorOrderByRelationAggregateInput } from "../inputs/BerryFlavorOrderByRelationAggregateInput";
import { MoveOrderByRelationAggregateInput } from "../inputs/MoveOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ContestTypeOrderByWithRelationInput", {})
export class ContestTypeOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  identifier?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => MoveOrderByRelationAggregateInput, {
    nullable: true
  })
  moves?: MoveOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorOrderByRelationAggregateInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorOrderByRelationAggregateInput | undefined;
}
