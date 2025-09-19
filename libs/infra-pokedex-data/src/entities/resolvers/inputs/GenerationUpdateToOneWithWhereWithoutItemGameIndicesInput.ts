import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutItemGameIndicesInput } from "../inputs/GenerationUpdateWithoutItemGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput", {})
export class GenerationUpdateToOneWithWhereWithoutItemGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutItemGameIndicesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutItemGameIndicesInput;
}
