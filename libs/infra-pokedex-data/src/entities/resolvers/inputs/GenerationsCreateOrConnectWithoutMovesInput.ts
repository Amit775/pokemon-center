import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateWithoutMovesInput } from "../inputs/GenerationsCreateWithoutMovesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateOrConnectWithoutMovesInput", {})
export class GenerationsCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationsWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationsCreateWithoutMovesInput, {
    nullable: false
  })
  create!: GenerationsCreateWithoutMovesInput;
}
