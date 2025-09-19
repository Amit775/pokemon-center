import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { BerryCreateManyInput } from "../../../inputs/BerryCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyBerryArgs {
  @TypeGraphQL.Field(_type => [BerryCreateManyInput], {
    nullable: false
  })
  data!: BerryCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
