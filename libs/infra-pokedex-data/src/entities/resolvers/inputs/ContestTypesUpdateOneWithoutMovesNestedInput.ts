import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateOrConnectWithoutMovesInput } from "../inputs/ContestTypesCreateOrConnectWithoutMovesInput";
import { ContestTypesCreateWithoutMovesInput } from "../inputs/ContestTypesCreateWithoutMovesInput";
import { ContestTypesUpdateToOneWithWhereWithoutMovesInput } from "../inputs/ContestTypesUpdateToOneWithWhereWithoutMovesInput";
import { ContestTypesUpsertWithoutMovesInput } from "../inputs/ContestTypesUpsertWithoutMovesInput";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesUpdateOneWithoutMovesNestedInput", {})
export class ContestTypesUpdateOneWithoutMovesNestedInput {
  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutMovesInput, {
    nullable: true
  })
  create?: ContestTypesCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: ContestTypesCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpsertWithoutMovesInput, {
    nullable: true
  })
  upsert?: ContestTypesUpsertWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  disconnect?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  delete?: ContestTypesWhereInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: true
  })
  connect?: ContestTypesWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ContestTypesUpdateToOneWithWhereWithoutMovesInput, {
    nullable: true
  })
  update?: ContestTypesUpdateToOneWithWhereWithoutMovesInput | undefined;
}
