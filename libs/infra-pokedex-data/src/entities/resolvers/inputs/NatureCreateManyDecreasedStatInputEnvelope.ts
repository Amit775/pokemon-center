import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { NatureCreateManyDecreasedStatInput } from "../inputs/NatureCreateManyDecreasedStatInput";

@TypeGraphQL.InputType("NatureCreateManyDecreasedStatInputEnvelope", {})
export class NatureCreateManyDecreasedStatInputEnvelope {
  @TypeGraphQL.Field(_type => [NatureCreateManyDecreasedStatInput], {
    nullable: false
  })
  data!: NatureCreateManyDecreasedStatInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
