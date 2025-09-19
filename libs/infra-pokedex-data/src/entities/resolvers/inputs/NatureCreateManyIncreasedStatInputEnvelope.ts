import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyIncreasedStatInput } from "../inputs/NatureCreateManyIncreasedStatInput";

@TypeGraphQL.InputType("NatureCreateManyIncreasedStatInputEnvelope", {})
export class NatureCreateManyIncreasedStatInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureCreateManyIncreasedStatInput], {
    nullable: false
  })
  data!: NatureCreateManyIncreasedStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
