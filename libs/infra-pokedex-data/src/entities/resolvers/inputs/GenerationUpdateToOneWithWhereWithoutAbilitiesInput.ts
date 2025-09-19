import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutAbilitiesInput } from "../inputs/GenerationUpdateWithoutAbilitiesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutAbilitiesInput", {})
export class GenerationUpdateToOneWithWhereWithoutAbilitiesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutAbilitiesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutAbilitiesInput;
}
