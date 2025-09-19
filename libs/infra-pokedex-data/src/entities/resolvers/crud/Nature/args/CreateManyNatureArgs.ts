import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { NatureCreateManyInput } from "../../../inputs/NatureCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyNatureArgs {
  @TypeGraphQL.Field(_type => [NatureCreateManyInput], {
    nullable: false
  })
  data!: NatureCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
