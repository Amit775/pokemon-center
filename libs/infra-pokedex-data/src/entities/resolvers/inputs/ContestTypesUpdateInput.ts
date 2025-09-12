import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BerryFlavorsUpdateManyWithoutContestTypeNestedInput } from "../inputs/BerryFlavorsUpdateManyWithoutContestTypeNestedInput";
import { IntFieldUpdateOperationsInput } from "../inputs/IntFieldUpdateOperationsInput";
import { MovesUpdateManyWithoutContestTypeNestedInput } from "../inputs/MovesUpdateManyWithoutContestTypeNestedInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";

@TypeGraphQL.InputType("ContestTypesUpdateInput", {})
export class ContestTypesUpdateInput {
  @TypeGraphQL.Field(_type => IntFieldUpdateOperationsInput, {
    nullable: true
  })
  id?: IntFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  identifier?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => MovesUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  moves?: MovesUpdateManyWithoutContestTypeNestedInput | undefined;

  @TypeGraphQL.Field(_type => BerryFlavorsUpdateManyWithoutContestTypeNestedInput, {
    nullable: true
  })
  berryFlavors?: BerryFlavorsUpdateManyWithoutContestTypeNestedInput | undefined;
}
