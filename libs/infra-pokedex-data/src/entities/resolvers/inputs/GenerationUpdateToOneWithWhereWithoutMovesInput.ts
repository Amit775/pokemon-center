import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutMovesInput } from "../inputs/GenerationUpdateWithoutMovesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutMovesInput", {})
export class GenerationUpdateToOneWithWhereWithoutMovesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutMovesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutMovesInput;
}
