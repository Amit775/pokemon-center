import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutLocationGameIndicesInput } from "../inputs/GenerationUpdateWithoutLocationGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput", {})
export class GenerationUpdateToOneWithWhereWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutLocationGameIndicesInput;
}
