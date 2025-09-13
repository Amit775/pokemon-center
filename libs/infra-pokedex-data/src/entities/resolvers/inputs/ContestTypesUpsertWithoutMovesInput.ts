import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateWithoutMovesInput } from "../inputs/ContestTypesCreateWithoutMovesInput";
import { ContestTypesUpdateWithoutMovesInput } from "../inputs/ContestTypesUpdateWithoutMovesInput";
import { ContestTypesWhereInput } from "../inputs/ContestTypesWhereInput";

@TypeGraphQL.InputType("ContestTypesUpsertWithoutMovesInput", {})
export class ContestTypesUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypesUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: ContestTypesUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestTypesCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestTypesWhereInput, {
    nullable: true
  })
  where?: ContestTypesWhereInput | undefined;
}
