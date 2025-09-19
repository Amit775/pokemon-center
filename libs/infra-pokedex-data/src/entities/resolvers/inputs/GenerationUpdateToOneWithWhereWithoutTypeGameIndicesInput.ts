import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationUpdateWithoutTypeGameIndicesInput } from "../inputs/GenerationUpdateWithoutTypeGameIndicesInput";
import { GenerationWhereInput } from "../inputs/GenerationWhereInput";

@TypeGraphQL.InputType("GenerationUpdateToOneWithWhereWithoutTypeGameIndicesInput", {})
export class GenerationUpdateToOneWithWhereWithoutTypeGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationWhereInput, {
    nullable: true
  })
  where?: GenerationWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationUpdateWithoutTypeGameIndicesInput, {
    nullable: false
  })
  data!: GenerationUpdateWithoutTypeGameIndicesInput;
}
