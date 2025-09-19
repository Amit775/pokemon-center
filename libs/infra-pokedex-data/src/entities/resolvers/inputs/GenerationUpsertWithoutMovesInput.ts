import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationCreateWithoutMovesInput } from "../inputs/GenerationCreateWithoutMovesInput";
import { GenerationUpdateWithoutMovesInput } from "../inputs/GenerationUpdateWithoutMovesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpsertWithoutMovesInput", {})
export class GenerationUpsertWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationUpdateWithoutMovesInput, {
    nullable: false
  })
  update!: GenerationUpdateWithoutMovesInput;

  @TypeGraphQL.Field(_type => GenerationCreateWithoutMovesInput, {
    nullable: false
  })
  create!: GenerationCreateWithoutMovesInput;

  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;
}
