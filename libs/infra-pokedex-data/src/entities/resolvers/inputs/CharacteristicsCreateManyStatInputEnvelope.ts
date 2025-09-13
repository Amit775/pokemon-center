import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CharacteristicsCreateManyStatInput } from "../inputs/CharacteristicsCreateManyStatInput";

@TypeGraphQL.InputType("CharacteristicsCreateManyStatInputEnvelope", {})
export class CharacteristicsCreateManyStatInputEnvelope {
  @TypeGraphQL.Field(_type => [CharacteristicsCreateManyStatInput], {
    nullable: false
  })
  data!: CharacteristicsCreateManyStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
