import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsCreateOrConnectWithoutMovesInput } from "../inputs/GenerationsCreateOrConnectWithoutMovesInput";
import { GenerationsCreateWithoutMovesInput } from "../inputs/GenerationsCreateWithoutMovesInput";
import { GenerationsWhereUniqueInput } from "../inputs/GenerationsWhereUniqueInput";

@TypeGraphQL.InputType("GenerationsCreateNestedOneWithoutMovesInput", {})
export class GenerationsCreateNestedOneWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationsCreateWithoutMovesInput, {
    nullable: true
  })
  create?: GenerationsCreateWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsCreateOrConnectWithoutMovesInput, {
    nullable: true
  })
  connectOrCreate?: GenerationsCreateOrConnectWithoutMovesInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsWhereUniqueInput, {
    nullable: true
  })
  connect?: GenerationsWhereUniqueInput | undefined;
}
