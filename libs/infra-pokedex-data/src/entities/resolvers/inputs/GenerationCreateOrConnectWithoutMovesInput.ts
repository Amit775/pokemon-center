import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutMovesInput } from "../inputs/GenerationCreateWithoutMovesInput";
import { GenerationWhereUniqueInput } from "../inputs/GenerationWhereUniqueInput";

@TypeGraphQL.InputType("GenerationCreateOrConnectWithoutMovesInput", {})
export class GenerationCreateOrConnectWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationWhereUniqueInput, {
    nullable: false
  })
  where!: GenerationWhereUniqueInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutMovesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutMovesInput;
}
