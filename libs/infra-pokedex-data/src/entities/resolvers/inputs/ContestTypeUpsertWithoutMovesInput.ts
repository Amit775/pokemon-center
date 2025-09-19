import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ContestTypeCreateWithoutMovesInput } from "../inputs/ContestTypeCreateWithoutMovesInput";
import { ContestTypeUpdateWithoutMovesInput } from "../inputs/ContestTypeUpdateWithoutMovesInput";
import { ContestTypeWhereInput } from "../inputs/ContestTypeWhereInput";

@TypeGraphQL.InputType("ContestTypeUpsertWithoutMovesInput", {})
export class ContestTypeUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => ContestTypeUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: ContestTypeUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestTypeCreateWithoutMovesInput, {
    nullable: false
  })
  create!: ContestTypeCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => ContestTypeWhereInput, {
    nullable: true
  })
  where?: ContestTypeWhereInput | undefined;
}
