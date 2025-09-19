import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { MoveDamageClassCreateOrConnectWithoutMovesInput } from "../inputs/MoveDamageClassCreateOrConnectWithoutMovesInput";
import { MoveDamageClassCreateWithoutMovesInput } from "../inputs/MoveDamageClassCreateWithoutMovesInput";
import { MoveDamageClassUpdateToOneWithWhereWithoutMovesInput } from "../inputs/MoveDamageClassUpdateToOneWithWhereWithoutMovesInput";
import { MoveDamageClassUpsertWithoutMovesInput } from "../inputs/MoveDamageClassUpsertWithoutMovesInput";
import { MoveDamageClassWhereUniqueInput } from "../inputs/MoveDamageClassWhereUniqueInput";

@TypeGraphQL.InputType("MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput", {})
export class MoveDamageClassUpdateOneRequiredWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => MoveDamageClassCreateWithoutMovesInput, {
    nullable: true
  })
  create?: MoveDamageClassCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: MoveDamageClassCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: MoveDamageClassUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassWhereUniqueInput, {
    nullable: true
  })
  connect?: MoveDamageClassWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => MoveDamageClassUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: MoveDamageClassUpdateToOneWithWhereWithoutMovesInput | undefined;
}
