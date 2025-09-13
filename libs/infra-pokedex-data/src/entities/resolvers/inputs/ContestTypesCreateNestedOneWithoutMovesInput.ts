import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateOrConnectWithoutMovesInput } from "../inputs/ContestTypesCreateOrConnectWithoutMovesInput";
import { ContestTypesCreateWithoutMovesInput } from "../inputs/ContestTypesCreateWithoutMovesInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesCreateNestedOneWithoutMovesInput", {})
export class ContestTypesCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestTypesCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypesCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypesWhereUniqueInput | undefined;
}
