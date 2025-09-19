import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateWithoutMovesInput } from "../inputs/ContestTypeCreateWithoutMovesInput";
import { ContestTypeWhereUniqueInput } from "../inputs/ContestTypeWhereUniqueInput";

@TypeGraphQL.InputType("ContestTypeCreateOrConnectWithoutMovesInput", {})
export class ContestTypeCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypeWhereUniqueInput, {
    nullable: false
  })
  where!: ContestTypeWhereUniqueInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestTypeCreateWithoutMovesInput;
}
