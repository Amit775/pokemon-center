import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateOrConnectWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateOrConnectWithoutBerryFlavorsInput";
import { ContestTypeCreateWithoutBerryFlavorsInput } from "../inputs/ContestTypeCreateWithoutBerryFlavorsInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeCreateNestedOneWithoutBerryFlavorsInput", {})
export class ContestTypeCreateNestedOneWithoutBerryFlavorsInput {
  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutBerryFlavorsInput, {
    nullable: true
  })
  create?: ContestTypeCreateWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeCreateOrConnectWithoutBerryFlavorsInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypeCreateOrConnectWithoutBerryFlavorsInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypeWhereUniqueInput | undefined;
}
