import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateOrConnectWithoutBerryFlavorsInput";
import { ContestTypesCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypesCreateWithoutBerryFlavorsInput";
import { ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput } from "../inputs/ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput";
import { ContestTypesUpsertWithoutBerryFlavorsInput } from "../inputs/ContestTypesUpsertWithoutBerryFlavorsInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput", {})
export class ContestTypesUpdateOneRequiredWithoutBerryFlavorsNestedInput {
  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: ContestTypesCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypesCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpsertWithoutBerryFlavorsInput, {
    nullable: true
  })
  upsert?: ContestTypesUpsertWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput, {
    nullable: true
  })
  update?: ContestTypesUpdateToOneWithWhereWithoutBerryFlavorsInput | undefined;
}
