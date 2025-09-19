import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicCreateManyStatInput } from "../inputs/CharacteristicCreateManyStatInput";

@TypeGraphQL.InputType("CharacteristicCreateManyStatInputEnvelope", {})
export class CharacteristicCreateManyStatInputEnvelope {
  @TypeGraphQL.Field(_type => [CharacteristicCreateManyStatInput], {
    nullable: false
  })
  data!: CharacteristicCreateManyStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
