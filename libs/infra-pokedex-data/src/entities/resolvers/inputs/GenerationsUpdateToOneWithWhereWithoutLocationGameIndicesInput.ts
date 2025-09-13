import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { GenerationsUpdateWithoutLocationGameIndicesInput } from "../inputs/GenerationsUpdateWithoutLocationGameIndicesInput";
import { GenerationsWhereInput } from "../inputs/GenerationsWhereInput";

@TypeGraphQL.InputType("GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput", {})
export class GenerationsUpdateToOneWithWhereWithoutLocationGameIndicesInput {
  @TypeGraphQL.Field(_type => GenerationsWhereInput, {
    nullable: true
  })
  where?: GenerationsWhereInput | undefined;

  @TypeGraphQL.Field(_type => GenerationsUpdateWithoutLocationGameIndicesInput, {
    nullable: false
  })
  data!: GenerationsUpdateWithoutLocationGameIndicesInput;
}
