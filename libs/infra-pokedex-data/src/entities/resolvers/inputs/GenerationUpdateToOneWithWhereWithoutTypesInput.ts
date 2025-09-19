import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutTypesInput } from "../inputs/GenerationUpdateWithoutTypesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutTypesInput", {})
export class GenerationUpdateToOneWithWhereWithoutTypesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutTypesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutTypesInput;
}
