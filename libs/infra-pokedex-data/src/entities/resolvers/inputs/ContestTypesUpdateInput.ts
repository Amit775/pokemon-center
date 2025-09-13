import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateManyWithoutContestTypeNestedInput } from "../inputs/BerryFlavorsUpdateManyWithoutContestTypeNestedInput";
import { MovesUpdateManyWithoutContestTypeNestedInput } from "../inputs/MovesUpdateManyWithoutContestTypeNestedInput";

@TypeGraphQL.InputType("ContestTypesUpdateInput", {})
export class ContestTypesUpdateInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutContestTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsUpdateManyWithoutContestTypeNestedInput | undefined;
}
