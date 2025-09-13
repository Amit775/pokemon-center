import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateManyWithoutContestTypeNestedInput } from "../inputs/BerryFlavorsUpdateManyWithoutContestTypeNestedInput";

@TypeGraphQL.InputType("ContestTypesUpdateWithoutMovesInput", {})
export class ContestTypesUpdateWithoutMovesInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  id?: number | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  identifier?: string | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsUpdateManyWithoutContestTypeNestedInput | undefined;
}
