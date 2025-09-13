import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypesCreateWithoutMovesInput } from "../inputs/ContestTypesCreateWithoutMovesInput";
import { ContestTypesWhereUniqueInput } from "../inputs/ContestTypesWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypesCreateOrConnectWithoutMovesInput", {})
export class ContestTypesCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypesWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypesWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypesCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestTypesCreateWithoutMovesInput;
}
