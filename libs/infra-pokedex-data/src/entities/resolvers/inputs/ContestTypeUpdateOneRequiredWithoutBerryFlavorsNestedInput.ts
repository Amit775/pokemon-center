import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateOrConnectWithoutBerryFlavorsInput";
import { ContestTypeCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateWithoutBerryFlavorsInput";
import { ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput } from "../inputs/ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput";
import { ContestTypeUpsertWithoutBerryFlavorsInput } from "../inputs/ContestTypeUpsertWithoutBerryFlavorsInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput", {})
export class ContestTypeUpdateOneRequiredWithoutBerryFlavorsNestedInput {
  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: ContestTypeCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypeCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpsertWithoutBerryFlavorsInput, {
    nullable: true
  })
  upsert?: ContestTypeUpsertWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypeWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput, {
    nullable: true
  })
  update?: ContestTypeUpdateToOneWithWhereWithoutBerryFlavorsInput | undefined;
}
